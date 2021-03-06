import React, {useState} from 'react';
import '../components/Components.css';
import CollectionShow from '../components/CollectionShow'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function CollectionsList ({match, collections, addCollection, userPaintings, paintings}) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        addCollection(title)
    }

    const renderCollectionForm = () => {
        return <div className="collection-form">
            <p>Create a new collection:</p>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text"></input>
                <input className="button" type="submit" value="Create"></input>
            </form>
        </div>
        }
        
    const renderCollections = collections.map(collection => <Link key={collection.id} to={`/dashboard/collections/${collection.id}`}><li>{collection.title}</li></Link>)

    return (
        <div className="myCollections">
            <h1 id="mycollections">My Collections</h1>
            {renderCollectionForm()}
            <br></br>
            {renderCollections}
            <Route exact path={`${match.path}/:collectionId`} render={routerProps => <CollectionShow {...routerProps} collections={collections} userPaintings={userPaintings}/> } />
        </div>
    )
}

export default CollectionsList;

// {collections.map(collection=> {
//     return <h3>{collection.title}</h3>
// })}
