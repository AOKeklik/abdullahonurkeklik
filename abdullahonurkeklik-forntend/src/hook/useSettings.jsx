import { selectAllData, selectData, selectError, selectLoading, selectMessage } from '@/redux/slice/settingSlice'
import { useSelector } from 'react-redux'

export default function useSettings() {
    const data = useSelector(selectAllData)
    const settings = useSelector(selectData("settings"))
    const menus = useSelector(selectData("menus"))
    const projectCategories = useSelector(selectData("projectCategories"))

    const message = useSelector(selectMessage)
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)

    // console.log(data)

    return {
        logo: settings?.site_logo,
        address: settings?.site_address,
        phone: settings?.site_phone,
        email: settings?.site_email,
        copy: settings?.site_copy,

        menus,
        projectCategories,

        settingMessage: message,
        isLoadingSetting: loading || !settings,
        settingError: error,
    }
}