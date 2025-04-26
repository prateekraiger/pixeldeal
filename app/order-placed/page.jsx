'use client'
import { assets } from '@/assets/assets'
import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const OrderPlaced = () => {

  const { router } = useRouter()
  const { products } = useAppContext()

  const [orderDetails, setOrderDetails] = useState(null)
  const [orderItems, setOrderItems] = useState({})

  useEffect(() => {
    const details = window.sessionStorage.getItem("orderDetails")
    const items = window.sessionStorage.getItem("orderItems")
    if (details && items) {
      setOrderDetails(JSON.parse(details))
      setOrderItems(JSON.parse(items))
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/my-orders')
    }, 5000)
    return () => clearTimeout(timeout)
  }, [router])

  if (!orderDetails) {
    return <div className="flex justify-center items-center h-screen">No order found.</div>
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <div className="flex justify-center items-center relative">
        <Image className="absolute p-5" src={assets.checkmark} alt='' />
        <div className="animate-spin rounded-full h-24 w-24 border-4 border-t-green-300 border-gray-200"></div>
      </div>
      <div className="text-center text-2xl font-semibold text-green-700 mb-2">Order Placed Successfully!</div>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl">
        <h2 className="text-lg font-bold mb-3 text-orange-600">Order Summary</h2>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Product</th>
              <th className="py-2">Qty</th>
              <th className="py-2">Price</th>
              <th className="py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(orderItems).map((itemId) => {
              const product = products.find(product => product._id === itemId)
              if (!product || orderItems[itemId] <= 0) return null
              return (
                <tr key={itemId} className="border-b">
                  <td className="py-2 flex items-center gap-2">
                    <Image src={product.image[0]} alt={product.name} width={40} height={40} className="rounded w-10 h-10 object-cover" />
                    <span>{product.name}</span>
                  </td>
                  <td className="py-2 text-center">{orderItems[itemId]}</td>
                  <td className="py-2 text-center">₹{product.offerPrice}</td>
                  <td className="py-2 text-center">₹{product.offerPrice * orderItems[itemId]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="flex justify-end text-base font-semibold">
          Total: <span className="ml-2 text-orange-600">₹{Object.keys(orderItems).reduce((sum, itemId) => {
            const product = products.find(product => product._id === itemId)
            return sum + (product ? product.offerPrice * orderItems[itemId] : 0)
          }, 0)}</span>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Shipping & Payment Details</h3>
          <div><span className="font-medium">Name:</span> {orderDetails.name}</div>
          <div><span className="font-medium">Address:</span> {orderDetails.address}</div>
          <div><span className="font-medium">Phone:</span> {orderDetails.phone}</div>
          <div><span className="font-medium">Payment Mode:</span> {orderDetails.paymentMode}</div>
        </div>
      </div>
      <div className="text-gray-500 mt-2 text-sm">You will be redirected to My Orders in a few seconds...</div>
    </div>
  )
}

export default OrderPlaced