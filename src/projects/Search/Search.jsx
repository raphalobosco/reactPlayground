import { useState } from "react"

const Search = () => {

    const [keyword, setKeyword] = useState('')

    return (
        <div>
            <input onKeyUp={(e) => setKeyword(e.currentTarget.value)} type="text" />
            <p>{keyword}</p>

        </div>
    )
}

export default Search