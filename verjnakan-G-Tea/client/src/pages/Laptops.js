import React from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Helmet} from "react-helmet";

function Computers(props) {

    const [products, setproducts] = useState([]);
    const [brand, setBrand] = useState(null);
    const [oc, setOc] = useState(null);
    const [hardDisk, setHardDisk] = useState(null);
    const [ramSize, setRamSize] = useState(null);
    const [gpu, setGpuItem] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/products`)
            .then((response) => {
                setproducts(response.data);
            });
    }, []);
    const filterItem = (brandItem) => {
        console.log(brandItem)
        setBrand(brandItem);
    }
    const filterOc = (ocItem) => {
        console.log(ocItem)
        setOc(ocItem);
    }
    const filterHard = (hardItem) => {
        console.log(hardItem)
        setHardDisk(hardItem);
    }
    const filterRam = (RamItem) => {
        console.log(RamItem)
        setRamSize(RamItem)
    }
    const filterGpu = (GpuItem) => {
        console.log(GpuItem)
        setGpuItem(GpuItem)
    }
    return (
        <Wrapper>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
            </Helmet>
            <div className="container">
                <br/>
                 <h2 className={'computer-hello'}>Computers</h2>
                <br/>
                {products.length === 0 && <h5>Please wait.....</h5>}
                <div className="productList">
                <div className="filters">
                    <div className="brands brands">
                        <h3 className="brand">Brand</h3>
                    <div className='chose-brand'>
                        <button
                            onClick={() => filterItem(null)}
                            className="twelve"
                        > ALL Brands
                        </button>
                        <button
                            onClick={() => filterItem('ZOTAC')}
                            className="twelve"
                        >
                        <img src={'data:image/png;base64,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'} alt=""/>
                            ZOTAC</button>

                        <button
                            onClick={() => filterItem('Thermaltake')}
                            className="twelve"
                        >
                            <img src={'data:image/png;base64,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'} alt=""/>
                            Thermaltake
                        </button>
                        <button
                            onClick={() => filterItem('SkyTech')}
                        className={'twelve'}
                        >
                            <img src={'https://www.logolynx.com/images/logolynx/76/768f3d664db3969a2901fa7ac0bbf361.jpeg'} alt=""/>
                            SkyTech
                        </button>

                        <button
                            onClick={() => filterItem('MSI')}
                            className="twelve">
                            <img src={'https://upload.wikimedia.org/wikipedia/commons/1/13/Msi-Logo.jpg'} alt=""/>
                            MSI
                        </button>
                    </div>
                    </div>
                    <div className="brands gpu">
                        <h3 className="brand">Graphic Card</h3>
                        <div className='chose-brand'>
                            <button
                                onClick={() => filterGpu(null)}
                                className="twelve"
                            > ALL Graphic Card
                            </button>
                            <button
                                onClick={() => filterGpu('NVIDIA GeForce GTX 1650')}
                                className="twelve"
                            >
                                NVIDIA GeForce GTX 1650</button>
                            <button
                                onClick={() => filterGpu('NVIDIA GeForce GTX 1660')}
                                className="twelve"
                            >
                                NVIDIA GeForce GTX 1660
                            </button>

                            <button
                                onClick={() => filterGpu('NVIDIA GeForce RTX 3050')}
                                className="twelve"
                            >
                                NVIDIA GeForce RTX 3050
                            </button>
                            <button
                                onClick={() => filterGpu('NVIDIA GeForce RTX 3060')}
                                className="twelve"
                            >
                                NVIDIA GeForce RTX 3060
                            </button>
                            <button
                                onClick={() => filterGpu('NVIDIA GeForce RTX 3060 Ti')}
                                className="twelve"
                            >
                                NVIDIA GeForce RTX 3060 Ti
                            </button>
                            <button
                                onClick={() => filterGpu('NVIDIA GeForce RTX 3070')}
                                className="twelve"
                            >
                                NVIDIA GeForce RTX 3070
                            </button>
                            <button
                                onClick={() => filterGpu('NVIDIA GeForce RTX 3080')}
                                className="twelve"
                            >
                                NVIDIA GeForce RTX 3080
                            </button>
                            <button
                                onClick={()=> filterGpu('NVIDIA GeForce RTX 3090')}
                            className='twelve'
                            >
                                NVIDIA GeForce RTX 3090
                            </button>
                        </div>
                    </div>
                    <div className="brands ram">
                        <h3 className="brand">Ram Size</h3>
                        <div className='chose-brand'>
                            <button
                                onClick={() => filterRam(null)}
                                className="twelve"
                            > ALL Ram Size
                            </button>
                            <button
                                onClick={() => filterRam('8GB 3000Mhz DDR4 ')}
                                className="twelve"
                            >
                                8GB 3000Mhz DDR4</button>
                            <button
                                onClick={() => filterRam('16GB 3000Mhz DDR4 ')}
                                className="twelve"
                            >
                                16GB 3000Mhz DDR4
                            </button>

                            <button
                                onClick={() => filterRam('32GB 3200MHz DDR4')}
                                className="twelve"
                            >
                                32GB 3200MHz DDR4
                            </button>
                        </div>
                    </div>
                    <div className="brands hard-disk">
                        <h3 className="brand">Hard Disk</h3>
                        <div className='chose-brand'>
                            <button
                                onClick={() => filterHard(null)}
                                className="twelve"
                            > ALL Hard Disk
                            </button>
                            <button
                                onClick={() => filterHard('500GB SSD')}
                                className="twelve"
                            >
                                500GB SSD</button>
                            <button
                                onClick={() => filterHard('1TB NVMe SSD')}
                                className="twelve"
                            >
                                1TB NVMe SSD
                            </button>

                            <button
                                onClick={() => filterHard('2TB NVMe SSD')}
                                className="twelve"
                            >
                                2TB NVMe SSD
                            </button>
                        </div>
                    </div>
                    <div className="brands oc">
                        <h3 className="brand">Oc</h3>
                        <div className='chose-brand'>
                            <button
                                onClick={() => filterOc(null)}
                                className="twelve"
                            > ALL Oc
                            </button>
                            <button
                                onClick={() => filterOc('Windows 11')}
                                className="twelve"
                            >
                                <img src={'data:image/png;base64,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'} alt=""/>
                                Windows 11</button>
                            <button
                                onClick={() => filterOc('Windows 10 Home')}
                                className="twelve"
                            >
                                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9w2JA2gJJfy1BbR9OtOH_7ImlTKb5P2WrZw&usqp=CAU'} />
                                Windows 10
                            </button>


                        </div>
                    </div>
                </div>

                <div className="productss">
                    {products
                        .filter((b)=> !brand || b.brand === brand)
                        .filter((g)=> !gpu || g.graphic_card === gpu)
                        .filter((r)=> !ramSize || r.ram_size === ramSize)
                        .filter((h)=> !hardDisk || h.hard_disk === hardDisk)
                        .filter((o)=> !oc || o.oc === oc)
                        .map(product => (
                        <Link key={product.id} to={`/products/${product.id}`} className="computers-block">
                            <div className="col-md-3 margin_bottom1 productsBox">
                                <div className="product_box product_boxHover">
                                    <figure><img src={product.imgBig} alt={product.name}/></figure>
                                    <div className="product_text">
                                        <h3>{product.name}</h3>
                                        <h4 className={"price"}><span>Price: </span>{product.price} $</h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                </div>
            </div>
        </Wrapper>

    );
}

export default Computers;