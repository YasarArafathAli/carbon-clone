import React, { FC } from 'react'
import "./searchComponent.scss"
import Search from "antd/lib/input/Search";

interface SearchComponentProps {
    onSearch: Function;
    searchValue: string;
    setSearchValue: Function;
}

const SearchField: FC<SearchComponentProps> = (props) => {
    const { onSearch, searchValue,setSearchValue } = props;

    return (
        <div className="search-component">
            <Search placeholder="Search..."
                    value={searchValue}
                    allowClear
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                    onSearch={(searchText)=>onSearch(searchText)}
            />
        </div>
    )
}

export default SearchField;