const fs=require("fs")
const file1="./file1.txt"
const file2="./file2.txt"
const result="./result.txt"
try{
const num1=Number(fs.readFileSync(file1,"utf8"))
const num2=Number(fs.readFileSync(file2,"utf8"))
const sum=num1+num2
fs.writeFileSync(result,sum.toString())

}catch(err){
console.error("Error:",err)
}
