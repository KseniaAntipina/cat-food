import React from 'react'
import styles from './Product.module.css'
import cat from './../../images/Cat.png'

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            hoverSelected: false,
            availability: this.props.availability,
        }
        this.selectClick = this.selectClick.bind(this);
        this.selectCancelClick = this.selectCancelClick.bind(this);
    }

    selectClick() {
        this.setState({selected: true});
    }

    selectCancelClick() {
        this.setState({selected: false});
    }

    hoverInSelected() {
        if (this.state.selected === true) {
            this.setState({hoverSelected: true});
        }
    }

    removeHoverInSelected() {
        if (this.state.selected === true) {
            this.setState({hoverSelected: false});
        }
    }


    render() {
        const isSelected = this.state.selected;
        const isHover = this.state.hoverSelected;
        const isAvailabile = this.state.availability;

        let Selected = props => {
            if (this.props.availability === true) {
                return <p onClick={props.onClick} className={styles.textLink}>{this.props.selectText} </p>
            }
            return <p onClick={props.onClick} className={`${styles.textLink} ${styles.textLinkNotAvailabile}`} >{this.props.notAvailable} </p>
        }
        let UnSelected = props => {
            return (<p className={`${styles.linkBtn} ${styles.textLink}`}>Чего сидишь? Порадуй котэ, <a
                href='javascript:void(0);' onClick={props.onClick}>купи</a></p>)
        }

        let changeColorBorder = props => {
            if (isSelected === true && isAvailabile === true) {
                return styles.productItemWrapSelect
            } else if (isSelected === false) {
                return styles.productItemWrapDefault
            } else if (isSelected === true && isAvailabile === false) {
                return styles.productItemWrapNotAvailable
            }
        }

        let changeColorWeight = props => {
            if (isSelected === true && isAvailabile === true) {
                return styles.weightSelect
            } else if (isSelected === false) {
                return styles.weightDefault
            } else if (isSelected === true && isAvailabile === false) {
                return styles.weightNotAvailabile
            }
        }


        return (
            <div className={changeColorBorder()}
                 onClick={isSelected && isAvailabile ? this.selectCancelClick : this.selectClick}>
                <div className={styles.productItem} onMouseLeave={this.hoverInSelected.bind(this)}
                     onMouseEnter={this.removeHoverInSelected.bind(this)}>
                    <div className={styles.productItemText}>
                        {isHover && isAvailabile ?
                            <p className={`${styles.subtitle} ${styles.subtitleRed}`}>Котэ не одобряет?</p> :
                            <p className={styles.subtitle}>{this.props.subtitle}</p>}
                        <p className={styles.title}>{this.props.title}</p>
                        <p className={styles.ingredient}>{this.props.ingredient}</p>
                        <div className={styles.descriptionItems}>
                            <p className={styles.description}>
                                <span>{this.props.portions + ' '}</span>
                                {this.props.portionsText}
                            </p>
                            <p className={styles.description}>
                                <span>{this.props.giftCount + ' '}</span>
                                {this.props.giftDescr}
                            </p>
                            <p className={styles.description}>{this.props.giftDescr2}</p>
                        </div>
                    </div>
                    <img src={cat} alt="Кот"/>
                    <div
                        className={changeColorWeight()}>
                        <p className={styles.weightCount}>{this.props.weight}</p>
                        <p className={styles.weightTitle}>{this.props.weightTitle}</p>
                    </div>
                    {isSelected ?
                        <Selected onClick={this.selectCancelClick}/>
                        : <UnSelected onClick={this.selectClick}/>}
                </div>
            </div>
        )
    }
}


export default Product