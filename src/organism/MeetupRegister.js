import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import InputText from '../component/InputText'
import Input from '../component/Input'
import Button from '../component/ButtonPrimary'
import Grid from '@material-ui/core/Grid'
class MeetupRegister extends Component {
    render() {
        return (
            <div>
                <Card >
                    <CardHeader
                        title="Create Meetup" 
                        subheader="Meetup"
                    ></CardHeader>
                    <CardContent>
                        <Grid container spacing={8} 
                            direction="row"
                            justify="center"
                            alignItems="flex-start"
                            style={{flexGrow: 1}}>
                            <Grid item>
                                <div><Input name ='Judul'></Input></div>
                                <div><Input name='Tanggal'></Input></div>
                                <div><InputText label='Perihal'></InputText></div>
                                <div><Button>Create Meetup</Button></div>
                            </Grid>
                            
                        </Grid>
                        
                    </CardContent>
                    
                </Card>
                
            </div>
        );
    }
}

export default MeetupRegister;