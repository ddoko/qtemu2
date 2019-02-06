import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '../component/ButtonPrimary'
import Input from '../component/Input'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
const GridMember = ({...props})=>{
    return(
       <Card style={{marginBottom: 30}}>
           <CardHeader title="Register Member" subheader="Qtemu App"></CardHeader>
            <CardContent>
            <div>
                <Grid container spacing={8} 
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    style={{flexGrow: 1}}
                >
                    <Grid item>
                        <div><Input name ='Nama'></Input></div>
                        <div><Input name ='Alamat'></Input></div>
                        <div><Input name ='ID'></Input></div>
                        <div><Input name ='Pekerjaan'></Input></div>
                        <div><Input name ='Tlp'></Input></div>
                        <div><Button>Register</Button></div>
                        <div></div>
                    </Grid>
                </Grid>
            </div>
            </CardContent>
        </Card>
    )
}
export default GridMember