// Users
const users = [
  {username:'admin', password:'admin123', role:'admin'},
  {username:'user', password:'user123', role:'user'}
];

let currentRole = '';
let filteredCustomers = [...customers];

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = users.find(u => u.username === username && u.password === password);
  if(user){
    currentRole = user.role;
    document.getElementById('loginPage').style.display='none';
    document.getElementById('dashboard').style.display='block';
    document.getElementById('roleDisplay').innerText = currentRole;
    if(currentRole==='admin') document.getElementById('addButton').style.display='inline-block';
    renderTable(filteredCustomers);
  } else {
    document.getElementById('loginError').innerText = 'Invalid credentials';
  }
}

function logout(){
  currentRole = '';
  document.getElementById('dashboard').style.display='none';
  document.getElementById('loginPage').style.display='block';
  document.getElementById('loginError').innerText='';
}

function renderTable(data){
  const tbody = document.querySelector('#customersTable tbody');
  tbody.innerHTML = '';
  data.forEach(c=>{
    let actions = '';
    if(currentRole==='admin'){
      actions = `<button onclick="editCustomer(${c.CustomerID})">Edit</button>
                 <button onclick="deleteCustomer(${c.CustomerID})">Delete</button>`;
    }
    tbody.innerHTML += `<tr>
      <td>${c.CustomerID}</td>
      <td>${c.CustomerName}</td>
      <td>${c.ContactName}</td>
      <td>${c.City}</td>
      <td>${c.Country}</td>
      <td>${actions}</td>
    </tr>`;
  });
}

function searchCustomers(){
  const query = document.getElementById('searchInput').value.toLowerCase();
  filteredCustomers = customers.filter(c => c.CustomerName.toLowerCase().includes(query) || c.City.toLowerCase().includes(query));
  renderTable(filteredCustomers);
}

// Admin CRUD
function showAddForm(){
  document.getElementById('addEditForm').style.display='block';
  document.getElementById('formTitle').innerText='Add Friend';
  document.getElementById('editId').value='';
}

function cancelForm(){
  document.getElementById('addEditForm').style.display='none';
}

function saveCustomer(){
  const id = document.getElementById('editId').value;
  const newCustomer = {
    CustomerID: id ? parseInt(id) : customers.length+1,
    CustomerName: document.getElementById('custName').value,
    ContactName: document.getElementById('contactName').value,
    Address: document.getElementById('address').value,
    City: document.getElementById('city').value,
    PostalCode: document.getElementById('postal').value,
    Country: document.getElementById('country').value
  };

  if(id){
    const index = customers.findIndex(c=>c.CustomerID==id);
    customers[index] = newCustomer;
  } else {
    customers.push(newCustomer);
  }

  cancelForm();
  renderTable(filteredCustomers);
}

function editCustomer(id){
  const c = customers.find(c=>c.CustomerID==id);
  document.getElementById('addEditForm').style.display='block';
  document.getElementById('formTitle').innerText='Edit Friend';
  document.getElementById('editId').value=c.CustomerID;
  document.getElementById('custName').value=c.CustomerName;
  document.getElementById('contactName').value=c.ContactName;
  document.getElementById('address').value=c.Address;
  document.getElementById('city').value=c.City;
  document.getElementById('postal').value=c.PostalCode;
  document.getElementById('country').value=c.Country;
}

function deleteCustomer(id){
  if(confirm('Are you sure to delete this friend?')){
    const index = customers.findIndex(c=>c.CustomerID==id);
    customers.splice(index,1);
    renderTable(filteredCustomers);
  }
}