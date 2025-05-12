
for(let i=1; i<=10; i++){
   // console.log(`outer loop value: ${i}`)
    for(let j=1;j<=10;j++){
        //console.log(`inner loop value: ${j} and outer loop value: ${i}`);
       // console.log(i +'*'+ j +'='+ i*j)
    }    
}

// break and continue
for (let index = 0; index <= 20; index++) {
     // if(index == 5) break;
     if(index == 5){
        //console.log("detected 5");
        break;
     }
   // console.log(`value of index is ${index}`);  
}

for (let index = 0; index <= 20; index++) {
     if(index == 5){
        console.log("detected 5");
        continue;
     }
    console.log(`value of index is ${index}`);  
}