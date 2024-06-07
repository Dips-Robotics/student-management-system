import supabase from "../config/supabase";

export const fetchProvinces = async () => {
    const provincesArray = []

    const { data, error } = await supabase
    .from('provinces')
    .select()

    if (error) {
        console.log(error)
    }

    if (data) {
        provincesArray.push(data)
    }

    return provincesArray
}
