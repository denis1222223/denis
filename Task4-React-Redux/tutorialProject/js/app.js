var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

// var Add = React.createClass({
//     getInitialState: function() { //устанавливаем начальное состояние (state)
//         return {
//             agreeNotChecked: true,
//             authorIsEmpty: true,
//             textIsEmpty: true
//         };
//     },
//     componentDidMount: function() {
//         ReactDOM.findDOMNode(this.refs.author).focus();
//     },
//     onBtnClickHandler: function(e) {
//         e.preventDefault();
//         var author = ReactDOM.findDOMNode(this.refs.author).value;
//         var text = ReactDOM.findDOMNode(this.refs.text).value;
//         alert(author + '\n' + text);
//     },
//     onCheckRuleClick: function(e) {
//         this.setState({agreeNotChecked: !this.state.agreeNotChecked}); //устанавливаем значение в state
//     },
//     onAuthorChange: function(e) {
//         if (e.target.value.trim().length > 0) {
//             this.setState({authorIsEmpty: false})
//         } else {
//             this.setState({authorIsEmpty: true})
//         }
//     },
//     onTextChange: function(e) {
//         if (e.target.value.trim().length > 0) {
//             this.setState({textIsEmpty: false})
//         } else {
//             this.setState({textIsEmpty: true})
//         }
//     },
//     render: function() {
//         var agreeNotChecked = this.state.agreeNotChecked,
//             authorIsEmpty = this.state.authorIsEmpty,
//             textIsEmpty = this.state.textIsEmpty;
//         return (
//             <form className='add cf'>
//                 <input
//                     type='text'
//                     className='add__author'
//                     onChange={this.onAuthorChange}
//                     placeholder='Ваше имя'
//                     ref='author'
//                 />
//         <textarea
//             className='add__text'
//             onChange={this.onTextChange}
//             placeholder='Текст новости'
//             ref='text'
//         ></textarea>
//                 <label className='add__checkrule'>
//                     <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я согласен с правилами
//                 </label>
//
//                 <button
//                     className='add__btn'
//                     onClick={this.onBtnClickHandler}
//                     ref='alert_button'
//                     disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
//                 >
//                     Показать alert
//                 </button>
//             </form>
//         );
//     }
// });

var Add = React.createClass({
    getInitialState: function() { //устанавливаем начальное состояние (state)
        return {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        };
    },
    componentDidMount: function() {
        ReactDOM.findDOMNode(this.refs.author).focus();
    },
    onBtnClickHandler: function(e) {
        e.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = ReactDOM.findDOMNode(this.refs.text).value;
        alert(author + '\n' + text);
    },
    onCheckRuleClick: function(e) {
        ReactDOM.findDOMNode(this.refs.alert_button).disabled = !e.target.checked; //устанавливаем значение в state
    },
    onAuthorChange: function(e) {
        if (e.target.value.trim().length > 0) {
            this.setState({authorIsEmpty: false})
        } else {
            this.setState({authorIsEmpty: true})
        }
    },
    onTextChange: function(e) {
        if (e.target.value.trim().length > 0) {
            this.setState({textIsEmpty: false})
        } else {
            this.setState({textIsEmpty: true})
        }
    },
    render: function() {
        return (
            <form className="add cf">
                <input
                    type='text'
                    className='add__author'
                    placeholder='Ваше имя'
                    ref='author'
                />
                <textarea
                    className='add__text'
                    placeholder='Текст новости'
                    ref='text'
                />
                <label className='add__checkrule'>
                    <input
                        type='checkbox'
                        ref='checkrule'
                        onChange={this.onCheckRuleClick}
                    />
                    Я согласен с правилами
                </label>
                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled
                >
                    Показать alert
                </button>
            </form>
        );
    }
});

var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired,
        })
    },
    getInitialState: function() {
        return {
            visible: false
        };
    },
    readmoreClick: function(e) {
        e.preventDefault();
        this.setState({visible: true});
    },
    render: function() {
        var article = this.props.data,
            key = this.props.key,
            visible = this.state.visible;
        return (
            <div className="article" key={key}>
                <p className="news__author">{article.author}:</p>
                <p className="news__text">{article.text}</p>
                <a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? 'none': '')}>Подробнее</a>
                <p className={'news__big-text ' + (visible ? '': 'none')}>{article.bigText}</p>
            </div>
        );
    }
});

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate = <p>К сожалению новостей нет</p>;
        if (data.length) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <Article data={item} key={index} />
                )
            });
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong className={data.length ? "" : "none"}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <Add />
                <News data={my_news} />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);