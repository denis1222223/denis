import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.pageActions.setYear(+e.target.innerText)
    }
    render() {
        const { year, photos } = this.props.page;
        return <div>
            <p>
                <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
                <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
                <button onClick={this.onYearBtnClick.bind(this)}>2014</button>
            </p>
            <h3>{year} год</h3>
            <p>У тебя {photos.length} фото.</p>
        </div>
    }
}

Page.propTypes = {
    page: PropTypes.shape({
        photos: PropTypes.array.isRequired,
        year: PropTypes.number.isRequired
    }),
    pageActions: PropTypes.shape({
        setYear: PropTypes.func.isRequired
    })
};