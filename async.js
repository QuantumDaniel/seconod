
async function main() {
  await sendMessage();
  console.log('Invite people to join me');
}

function sendMessage(){
  return new Promise((resolve) => {
    console.log('calling John...');
    setTimeout(()=>{
      console.log('Here is the coffee');
     resolve();
    },2000);
  });
}
main();                                        