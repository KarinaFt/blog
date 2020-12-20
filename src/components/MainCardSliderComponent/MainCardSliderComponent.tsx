import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import './MainCardSliderComponent.scss'
import {MainCard} from "../MainCard/MainCard";
import { getPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getPostAction?: any,
    post?: any,
    isLoading?: boolean,
}

class MainCardSliderComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPostAction();
    };

    render() {

        let renderMainCard = this.props.post.map((post: any, num:number) =>
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
        post: state.postsReducers.post,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPostAction: () => dispatch(getPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCardSliderComponent);


