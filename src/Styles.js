import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: "50%",
        backgroundColor: "#4b1b4d",
        minHeight: 80
    },
    heading: {
        color: 'white',
        opacity: "200%"
    },
    image: {
        marginLeft: '15px',
    },
    
    content: {
        marginTop: 80,
        [theme.breakpoints.down('sm')]: 
        {
            flexDirection: "column-reverse",
        }    
    }
    
}))