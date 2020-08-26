import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import './MainCardSliderComponent.scss'
import {MainCard} from "../MainCard/MainCard";
import {getListPostsAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getListPostsAction?: any,
    isLoading?: boolean,
    listPosts?: any,
}

class MainCardSliderComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
    };

    render() {


        let renderMainCard = this.props.listPosts.map((post: any, num:number) =>
            <div key = {num} className={'main-slider__slide'}>
                <div className={'main-slider__slide__content'}>
                    <MainCard {...post} />
                </div>
            </div>
        );

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderMainCard}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        listPosts: state.postsReducers.listPosts,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getListPostsAction: () => dispatch(getListPostsAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCardSliderComponent);


