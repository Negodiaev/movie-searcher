import React from "react";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function Searchbar(props) {
    const handleInput = e => {
        props.onSearchChange(e.target.value);
    };

    return (
        <div className={props.classes.search}>
            <div className={props.classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                classes={{
                    root: props.classes.inputRoot,
                    input: props.classes.inputInput
                }}
                placeholder="Search"
                inputProps={{ "aria-label": "Search" }}
                onChange={handleInput}
            />
        </div>
    );
}
