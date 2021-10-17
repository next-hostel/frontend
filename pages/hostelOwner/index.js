import React from 'react'
import Hostelowner from '../../components/auth/HostelOwner'
import Layout from '../../components/Layout'
import HostelOwner from '../../components/Profile/HostelOwner/HostelOwner'

const index = () => {
    return (
        <Layout>
        <Hostelowner>
            <HostelOwner />
        </Hostelowner>
        </Layout>
    )
}

export default index
