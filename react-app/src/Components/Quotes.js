export function Quotes(prop){
    const listElements = prop.quotes.map((val) => <li key={val}>Hello, {val}</li>);

    return <ol>
        {listElements}
    </ol>
}