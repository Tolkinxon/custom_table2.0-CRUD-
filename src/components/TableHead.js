import '../App.css'
export default function TableHead(prop) {
    return (
        <div className="head">
            {prop.children}
        </div>
    )
}