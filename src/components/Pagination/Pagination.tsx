import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.scss'
import {PostAuthor} from '../PostAuthor/PostAuthor';
import {ImageBox} from '../ImageBox/ImageBox';
import {Title} from '../Title/Title';
import {connect} from 'react-redux';
import {getAuthorPostAction} from '../../redux/actions/getPostsActions';


interface IProps {
    getAuthorPostAction?: any,
    authorPost?: any,
}

interface IState {
    offset?: number,
    perPage?: any,
    currentPage?: number,
    pageCount?: number,
    authorPost?: any,
    renderCard?: any
}

class Pagination extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 3,
            currentPage: 0,
            pageCount: null
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    receivedData() {
        this.props.getAuthorPostAction();

        let data = this.props.authorPost;

        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const renderCard = slice.map(post =>

            <div className='pagination-box pagination-box--hovered pagination-box__main-card'
                 key={post.id}>
                <ImageBox {...post}/>

                <div className="main-card">
                    <PostAuthor {...post} mdFontSize/>
                    <Title mixin='featured-post__title' xxlFontSize>
                        {post.category}
                    </Title>

                </div>
            </div>);

        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            renderCard
        })
    }

    handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
    };

    componentDidMount() {
        this.receivedData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.authorPost.length !== prevProps.authorPost.length) {
            this.receivedData()
        }
    }

    render() {
        return (
            <div>
                {this.state.renderCard}
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={1}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        authorPost: state.postsReducers.authorPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getAuthorPostAction: () => dispatch(getAuthorPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);