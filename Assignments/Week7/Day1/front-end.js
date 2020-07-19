var data;
        document.getElementById("load-db").addEventListener('click',function(){
            fetch("http://localhost:3010/all").then(response => response.json())
  .then(data1 => data=data1).then(data => document.getElementById("db").innerHTML=data);
        })