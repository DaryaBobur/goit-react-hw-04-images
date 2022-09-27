import { ThreeDots } from  'react-loader-spinner';

const Loader = () => {
    return (    
        <ThreeDots 
            visible={true} 
            height="150" 
            width="150"
            color='black'
            wrapperStyle={{marginRight: 'auto',
            marginLeft: 'auto'}}
        />
    )
}

export default Loader;