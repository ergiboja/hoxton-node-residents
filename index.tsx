 const people = [
  {
    "id": 0,
    "name": "Fannie Chan",
    "age": 21,
    "gender": "female",
    "houseID": 6
  },
  {
    "id": 1,
    "name": "Lilia Dean",
    "age": 33,
    "gender": "female",
    "houseID": 7
  },
  {
    "id": 2,
    "name": "Bowers Ross",
    "age": 35,
    "gender": "male",
    "houseID": 8
  },
  {
    "id": 3,
    "name": "Owens Stephenson",
    "age": 36,
    "gender": "male",
    "houseID": 9
  },
  {
    "id": 4,
    "name": "Lilian Walters",
    "age": 32,
    "gender": "female",
    "houseID": 10
  },
  {
    "id": 5,
    "name": "Lawrence Foreman",
    "age": 33,
    "gender": "male",
    "houseID": 11
  },
  {
    "id": 6,
    "name": "Little Griffin",
    "age": 36,
    "gender": "male",
    "houseID": 12
  },
  {
    "id": 7,
    "name": "Ochoa Duke",
    "age": 20,
    "gender": "male",
    "houseID": 13
  },
  {
    "id": 8,
    "name": "Goff Vincent",
    "age": 21,
    "gender": "male",
    "houseID": 14
  },
  {
    "id": 9,
    "name": "Larson Schwartz",
    "age": 30,
    "gender": "male",
    "houseID": 15
  },
  {
    "id": 10,
    "name": "Tracy Hart",
    "age": 23,
    "gender": "female",
    "houseID": 16
  }
];
const houses =[
  {
      "id": 0,
      "address": "266 Huron Street, Williston, Iowa, 808",
      "type": "flat"
    },
    {
      "id": 1,
      "address": "808 Evans Street, Maybell, Missouri, 3091",
      "type": "farm"
    },
    {
      "id": 2,
      "address": "800 Story Court, Imperial, Idaho, 2642",
      "type": "house"
    },
    {
      "id": 3,
      "address": "464 Cozine Avenue, Glendale, Kentucky, 5752",
      "type": "flat"
    },
    {
      "id": 4,
      "address": "528 Miller Place, Zarephath, Vermont, 5985",
      "type": "house"
    }



];





const express = require('express');
const app = express();
const port = 4000;

app.get("/houses", (req, res) => {
  res.send(houses);
});
app.get("/houses/:id", (req, res) => {
  const id = Number(req.params.id);
  const matched = houses.find((house) => house.id === id)
  if (matched) {
    res.send(matched)
  }
  else {
    res.status(404).send({ error: "Data Not found" })
  
  };
});

app.get("/people", (req, res) => {
  res.send(people);
});
app.get("/people/:id", (req, res) => {
  const id = Number(req.params.id);
  const matched = people.find((people)=>people.id===id)
  if(matched){
    res.send(matched)
  }else{
    res.status(404).send(
      {
        error: "Data Not Found"
      }
    )
  }
  res.send(people);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})