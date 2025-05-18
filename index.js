// You are building a reminder feature for a task management app.
// Write an async function that sends a reminder(simulated with console.log) after a delay using setTimeout.
// The function should return a Promise that resolves after 3 seconds with the message "Reminder sent to user!", 
// and you should await it to log the message.

async function sendReminder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Reminder sent to user!");
      }, 3000);
    });
  }
  (async () => {
    const message = await sendReminder();
    console.log(message);
  })();


 // In a startup's DevOps dashboard, implement a setInterval function that checks server status every 5 seconds
 // by calling an async function checkServer() that returns a Promise resolving to "Server is running" or rejecting with "Server down". 
 //Use .then() and .catch() to handle the result and stop the interval after 30 seconds using clearInterval.

async function checkServer() {
    if (Math.random() > 0.5) {
      return "Server is running";
    }
    else {
      throw new Error("Server down");
    }
  }
const serverCheck = setInterval(() => {
    checkServer()
      .then((message) => console.log(message))
      .catch((error) => console.log(error.message));
}, 5000);
setTimeout(() => {
    clearInterval(serverCheck);
    console.log("Stopped server checking");
}, 30000);

//You're building a system to show multiple notifications to a user. 
//Create an async function showNotifications that takes an array of messages and shows each message 1 second apart using await and setTimeout wrapped in a Promise. 
//After all messages are shown, log "All notifications sent".

async function showNotifications(notifications){
    for(let notification of notifications){
        await new Promise((resolve)=>{
            setTimeout(()=>{
                console.log(notification);
                resolve();

            }, 1000)
        })
    }
    console.log("All notifications sent.");
}

showNotifications(["Battry low!", "Update requred!", "System suspended"])


//In your startup’s API integration, 
//write an async function fetchDataWithRetry() that tries to fetch data from a mock API (use Promise.reject() for failure), 
//retries up to 3 times with a 2-second delay between attempts using setTimeout, and resolves with "Data fetched" or logs "Failed after 3 attempts" if all fail.

async function fetchDataWithRetry() {
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        await new Promise((resolve, reject) =>
          setTimeout(() => reject(new Error("API error")), 1000)
        );
        return "Data fetched";
      } catch (error) {
        console.log(`Attempt ${attempt} failed: ${error.message}`);
        if (attempt === maxAttempts) {
          console.log("Failed after 3 attempts");
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }
  }
fetchDataWithRetry().then((result) => result && console.log(result));

//You’re building a countdown timer for a product launch.
//Write a function that takes a number n and logs the countdown every second using setInterval.
//Once it reaches 0, stop the interval and call an async function launchProduct() that returns a resolved Promise with "Product Launched!" and logs it.

async function launchProduct() {
    return Promise.resolve("Product Launched!");
}
function startCountdown(countDown) {
    const intervalId = setInterval(() => {
      console.log(countDown);
      countDown--;
      if (countDown < 0) {
        clearInterval(intervalId);
        launchProduct().then((message) => console.log(message));
      }
    }, 1000);
  }
startCountdown(5);