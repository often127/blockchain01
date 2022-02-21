import React from 'react'
import axios from 'axios'
import OrderRow from './OrderRow'


class MySold extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myOrderList: null,
            loaded: false
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:4000/order/sold', { params: { _id: this.props.accountId } })
            .then(res => this.setState({
                myOrderList: res.data,
                loaded: true
            }))
            .catch(_ => window.location = 'http://localhost:65535/error')
    }

    render() {
        return (
            <>
                <h4>{this.props.title}</h4>
                <div className='py-3 row'>
                    {/* {this.state.loaded ? this.state.myOrderList.map(item => <ItemCard item={item} key={item._id} />) : null} */}
                </div>
                <div className='py-3 '>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Item</th>
                                    <th>Order</th>
                                    <th>Owner</th>
                                    <th>Purchaser</th>
                                    <th>State</th>
                                    <th>Deadline</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.loaded
                                    ? this.state.myOrderList.map(order => <OrderRow order={order} web3={this.props.web3} accountId={this.props.accountId} key={order._id} />)
                                    : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default MySold