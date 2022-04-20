import React from "react";
import GalleryItem from "../Gallery-item/Gallery-item";

function GalleryList(): JSX.Element {

    let items = [];

    for (let i = 1; i <= 6; i++) {
        items.push(i)
    }

    return (
        <div>
            <div className="container">
                <h1 className="mb-5">Галерея</h1>
                <div className="row justify-content-between flex-lg-wrap">
                        {items.map((item) => <div className="col-lg-4 mb-3"><GalleryItem /></div>)}
                </div>
            </div>

        </div>
    )
}
export default GalleryList;
