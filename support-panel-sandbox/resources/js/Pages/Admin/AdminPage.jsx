import AdminDashabordView from '@/Components/Admin/AdminDashboard'
import AdminLayout from '@/Layouts/AdminLayout'

export default function AdminPage({dummyData}) {
  return (
    <>
      <AdminLayout>
        <AdminDashabordView dummyData={dummyData}>
        </AdminDashabordView>
      </AdminLayout>
    </>
  )
}
