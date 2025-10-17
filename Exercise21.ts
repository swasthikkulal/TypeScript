type Entity = "user" | "order" | "product";
type Status = "created" | "updated" | "deleted";

type StatusValue = `${Entity}-${Status}`;

function checkStatus(entity:Entity, status:Status):StatusValue{
    return `${entity}-${status}`;
}

const status1=checkStatus("product","created");
const status2= checkStatus("order","deleted");

console.log(status1);
console.log(status2);