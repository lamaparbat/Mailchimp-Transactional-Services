 interface recieverStruct{
  email: string,
  type: string 
};


 interface createTablesProps {
  sender: string,
  to: Array<string>,
  subject: string,
  datetime: Date,
  status: string
}

export {
recieverStruct, 
createTablesProps
}