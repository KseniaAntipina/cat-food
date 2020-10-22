import React from 'react'
import styles from './Catalog.module.css'
import data from './../../data'
import Product from "../Product/Product";

class Catalog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }

    render() {
        return (
                <div className={styles.catalogItemsWrap}>
                    <h1>Ты сегодня покормил кота?</h1>
                    <div className={styles.catalogItems}>
                        {
                            this.state.data.map(
                                (item,i) => <Product data={this.state.data} key={item.id} {...item} selectText={item.selectText}/>
                            )
                        }
                    </div>
                </div>
        )
    }

}

export default Catalog
