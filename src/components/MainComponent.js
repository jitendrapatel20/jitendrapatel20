import React from 'react';
import SideNav from './SideNav';
import ProductComponent from './ProductComponent';

function MainComponent() {
    return (
        <main className='w-100 row mt-3' >
            <section className='col-2'>
                <SideNav />
            </section>
            <div className='col-10 '>
                <ProductComponent />
            </div>

        </main>
    );
}

export default MainComponent;
