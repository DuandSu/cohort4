import React from 'react';

class DispInvComp extends React.Component {
    constructor(props) {
        super(props);
        this.invDetails = [];
    }

    render() {
        this.invDetails = [];
        let dispInvNo = 0;
        for (let invDtl in this.props.pInvToPrint) {
            if (true) {
                this.invDetails.push((
                    <div>
                        <h4>
                            Inv#: {this.props.pInvToPrint[invDtl][0]} //
                            Date: {this.props.pInvToPrint[invDtl][2]} //
                            CustNo: {this.props.pInvToPrint[invDtl][3]} //
                            ProdNo: {this.props.pInvToPrint[invDtl][4]} //
                            Qty: {this.props.pInvToPrint[invDtl][5]} //
                            $per: {this.props.pInvToPrint[invDtl][6]} //
                            Unit: {this.props.pInvToPrint[invDtl][7]}
                        </h4>
                    </div>
                ));
            }
        }

        return (
            <div>
                <div>
                    {this.invDetails}
                </div>
            </div>
        );
    }
}

export default DispInvComp;