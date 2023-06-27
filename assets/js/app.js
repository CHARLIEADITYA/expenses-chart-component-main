const date = new Date();
// console.log(date.toLocaleString("en-US", { weekday: "long" }));
var weekday = date.toLocaleString("en-US", { weekday: "short" });
console.log(weekday);
var setData = "";
fetch("/assets/data/data.json")
  .then((res) => res.json())
  .then((Data) => {
    // console.log(Data.data);
    for (let i = 0; i < Data.data.length; i++) {
      //   const element = Data.data[i];
      setData += `
   <div>
     <div class="box" style="height:0px">
         <div class="amount">${Data.data[i].amount}</div>
     </div>
    <h1 class="weeks_name">${Data.data[i].day}</h1>
    </div>
        `;
    }
    document.querySelector(".week_content").innerHTML = setData;

    setTimeout(() => {
      document.querySelectorAll(".box").forEach((element, j) => {
        element.style.height = `${Data.data[j].amount*2}px`;
      });
    }, 50);

    document.querySelectorAll(".box").forEach((element, j) => {
      if (weekday.toLocaleLowerCase() == Data.data[j].day.toLocaleLowerCase()) {
        element.style.backgroundColor = "hsl(186, 34%, 60%)";
      }


    // document.querySelector("")
    });


    // let counts = setInterval(() => {
    //   updated();
    // }, 10);
  
  //   let number = 0;
  
  //   function updated() {
  //     document.querySelector(".result").innerHTML = ++number;
  //     if (number === 921) {
  //       clearInterval(counts);
  //     }
  //   }
  // });


  });




