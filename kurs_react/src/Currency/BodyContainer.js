import { compose } from 'redux'
import { connect } from 'react-redux'
import Body from './Body'
import { setFetchData, fetchData } from '../actions'

const mapStatsToProps = (state, ownProps) => ({
    currency: (state.currency[0] && state.currency[0].rates) || []
})

const mapDispatchToProps = dispatch => ({
    fetchData: compose(dispatch, setFetchData)// (data) => dispatch(setFetchData(data))
})

export default connect(
    mapStatsToProps,
    mapDispatchToProps
)(Body)