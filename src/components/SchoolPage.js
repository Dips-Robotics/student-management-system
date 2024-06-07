import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import supabase from "../config/supabase";

export default function SchoolPage() {
    const [provinces, setProvinces] = useState([])
    
    useEffect(() => { 
        const fetchData = async () => {
            const { data, error } = await supabase
            .from('provinces')
            .select()

            if (error) {
                console.log(error)
            }
        
            if (data) {
                setProvinces(data)
            }
        }

        fetchData()
    }, [])

    return (
        <div style={{ margin: '20px' }}>
            <Form>
                <Form.Label>School Name</Form.Label>
                <Form.Control type="text" /><br />
                <Form.Label>Province</Form.Label>
                <Form.Select>
                    { provinces && provinces.map(province => {
                        return <option value={province.province_id}>{province.province_name}</option>
                    }) }
                </Form.Select>
            </Form>
        </div>
    )
}