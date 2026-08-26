<Route path="/products" element={<ProductList />} />

<Route path="/products/:id" element={<ProductDetails />} />

<Route path="/order/:id" element={<OrderForm />} />
<Route path="/order-confirmation" element={<OrderConfirmation />} />

<Route path="/upload" element={<UploadProduct />} />
<Route path="/upload-confirmation" element={<UploadConfirmation />} />
<Route path="/manage-listings" element={<ManageListings />} />
<Route path="/edit/:id" element={<EditListing />} />
<Route path="/delete/:id" element={<DeleteConfirmation />} />
