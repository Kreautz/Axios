import React from 'react'
import RecipeReviewCard from './RecipeReviewCard';
import PaperSheet from './PaperSheet';
import ControlledExpansionPanels from './ControlledExpansionPanels';
import ImgMediaCard from './ImgMediaCard';
import IconAvatars from './IconAvatars';
import ImageAvatars from './ImageAvatars';

class Home extends React.Component{
    render(){
        return(

            <div>
           
                <div className="row">

                    <div className="col s12">
                    <div className="col s2">
                    </div>
                            <div className="col s8">
                                <div className="card-panel">

                                    <ImageAvatars></ImageAvatars>
                                    <ControlledExpansionPanels></ControlledExpansionPanels>
                                    <IconAvatars></IconAvatars>

                                </div>
                            </div>
                            
                    </div> 

                </div>
            
            </div>    
               
        )
    }
}

export default Home;