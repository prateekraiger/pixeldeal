"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Users, ShoppingBag, Package, BarChart2, Plus } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    category: "Earphone",
    price: "",
    offerPrice: "",
    image: []
  });

  // Mock data for demonstration
  useEffect(() => {
    // Mock products data
    setProducts([
      {
        id: "prod1",
        name: "Apple AirPods Pro",
        category: "Earphone",
        price: 4999.99,
        offerPrice: 3999.99,
        stock: 25
      },
      {
        id: "prod2",
        name: "Bose QuietComfort 45",
        category: "Headphone",
        price: 4299.99,
        offerPrice: 3299.99,
        stock: 15
      },
      {
        id: "prod3",
        name: "Samsung Galaxy S23",
        category: "Smartphone",
        price: 89999.99,
        offerPrice: 79999.99,
        stock: 10
      },
      {
        id: "prod4",
        name: "MacBook Pro M2",
        category: "Laptop",
        price: 129999.99,
        offerPrice: 119999.99,
        stock: 8
      },
      {
        id: "prod5",
        name: "NextGadget Mechanical Keyboard",
        category: "Accessories",
        price: 2999.99,
        offerPrice: 2499.99,
        stock: 30
      }
    ]);

    // Mock orders data
    setOrders([
      {
        id: "ORD-1234",
        customer: "John Doe",
        date: "2025-04-20",
        amount: 7999.98,
        status: "Completed",
        items: [
          { product: "Apple AirPods Pro", quantity: 2, price: 3999.99 }
        ],
        address: "123 Main St, City, State, 12345"
      },
      {
        id: "ORD-2345",
        customer: "Jane Smith",
        date: "2025-04-22",
        amount: 3299.99,
        status: "Processing",
        items: [
          { product: "Bose QuietComfort 45", quantity: 1, price: 3299.99 }
        ],
        address: "456 Oak Ave, Town, State, 67890"
      },
      {
        id: "ORD-3456",
        customer: "Robert Johnson",
        date: "2025-04-23",
        amount: 82499.98,
        status: "Shipped",
        items: [
          { product: "Samsung Galaxy S23", quantity: 1, price: 79999.99 },
          { product: "NextGadget Mechanical Keyboard", quantity: 1, price: 2499.99 }
        ],
        address: "789 Pine Rd, Village, State, 13579"
      }
    ]);

    // Mock users data
    setUsers([
      { id: "user1", name: "John Doe", email: "john@example.com", orders: 5 },
      { id: "user2", name: "Jane Smith", email: "jane@example.com", orders: 3 },
      { id: "user3", name: "Robert Johnson", email: "robert@example.com", orders: 2 },
      { id: "user4", name: "Emily Davis", email: "emily@example.com", orders: 1 },
      { id: "user5", name: "Michael Wilson", email: "michael@example.com", orders: 4 }
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    router.push("/admin/login");
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your API
    const newProductWithId = {
      ...newProduct,
      id: `prod${products.length + 1}`,
      stock: 10
    };
    setProducts(prev => [...prev, newProductWithId]);
    setNewProduct({
      name: "",
      description: "",
      category: "Earphone",
      price: "",
      offerPrice: "",
      image: []
    });
    alert("Product added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-center">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <div
            className={`px-6 py-3 flex items-center cursor-pointer ${
              activeTab === "dashboard"
                ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            <BarChart2 className="mr-3 h-5 w-5" />
            <span>Dashboard</span>
          </div>
          <div
            className={`px-6 py-3 flex items-center cursor-pointer ${
              activeTab === "products"
                ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("products")}
          >
            <Package className="mr-3 h-5 w-5" />
            <span>Products</span>
          </div>
          <div
            className={`px-6 py-3 flex items-center cursor-pointer ${
              activeTab === "add-product"
                ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("add-product")}
          >
            <Plus className="mr-3 h-5 w-5" />
            <span>Add Product</span>
          </div>
          <div
            className={`px-6 py-3 flex items-center cursor-pointer ${
              activeTab === "orders"
                ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("orders")}
          >
            <ShoppingBag className="mr-3 h-5 w-5" />
            <span>Orders</span>
          </div>
          <div
            className={`px-6 py-3 flex items-center cursor-pointer ${
              activeTab === "users"
                ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("users")}
          >
            <Users className="mr-3 h-5 w-5" />
            <span>Users</span>
          </div>
          <div
            className="px-6 py-3 flex items-center cursor-pointer text-gray-600 hover:bg-gray-100 mt-auto"
            onClick={handleLogout}
          >
            <LogOut className="mr-3 h-5 w-5" />
            <span>Logout</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            {activeTab === "add-product" 
              ? "Add New Product" 
              : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md flex items-center hover:bg-gray-300"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </button>
        </div>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Total Products</h2>
              <p className="text-3xl font-bold">{products.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
              <p className="text-3xl font-bold">{orders.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Total Users</h2>
              <p className="text-3xl font-bold">{users.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md col-span-3">
              <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          #{order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ₹{order.amount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : order.status === 'Processing' 
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Product Management</h2>
              <button 
                onClick={() => setActiveTab("add-product")}
                className="px-4 py-2 bg-orange-600 text-white rounded-md flex items-center hover:bg-orange-700"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add New Product
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Offer Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {product.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹{product.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹{product.offerPrice.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.stock}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Product Tab */}
        {activeTab === "add-product" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleProductChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={newProduct.category}
                    onChange={handleProductChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="Earphone">Earphone</option>
                    <option value="Headphone">Headphone</option>
                    <option value="Watch">Watch</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Camera">Camera</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={handleProductChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Offer Price (₹)
                  </label>
                  <input
                    type="number"
                    name="offerPrice"
                    value={newProduct.offerPrice}
                    onChange={handleProductChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={newProduct.description}
                  onChange={handleProductChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                      >
                        <span>Upload files</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveTab("products")}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Order Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹{order.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : order.status === 'Processing' 
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">User Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Orders
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.orders}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View Orders</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
