export async const getNumber = () => {
    console.log("Number!!");
    const response = await fetch("http://numbersapi.com/42");
    if(!response.ok){
        throw new Error(response.status);
    }
    const data = await response.text();
    return data;
}   