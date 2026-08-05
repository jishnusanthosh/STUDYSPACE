
const p=new Promise((res,rej)=>{
    res("promise resolved valuse")
})

async function getdata() {
    return p;
}

const dataPromise=getdata()

dataPromise.then((res) => console.log(res));
