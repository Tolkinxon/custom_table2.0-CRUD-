import '../App.css'

export default function TableRow({ id, children }) {
    if(id % 2 == 1){
        id = 1
    }
    else{
        id = 0
    }
  return (
    <div
      className="row"
      style={{ backgroundColor: id === 0 ? '#eeeeee ' : 'white' }}
    >
      {children}
    </div>
  )
}
