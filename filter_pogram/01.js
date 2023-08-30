const emp = [
    {
      "name": "Alice Smith",
      "age": 28,
      "position": "Marketing Manager",
      "salary": 60000
    },
    {
      "name": "Bob Johnson",
      "age": 35,
      "position": "Sales Representative",
      "salary": 55000
    },
    {
      "name": "Elena Rodriguez",
      "age": 42,
      "position": "Finance Analyst",
      "salary": 72000
    },
    {
      "name": "Michael Brown",
      "age": 31,
      "position": "Product Designer",
      "salary": 68000
    }
  ];
  
s=emp.filter(element => {
    return element.age>35
    
  });
console.log(s)