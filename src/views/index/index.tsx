// import { useState } from 'react'
import Dashboard from '@/components/dashboard'

// const initializerCount = {
//   create_video_num: 99,
//   publish_video_num: 159853,
//   upload_material_num: 4456,
//   auth_account_num: 5655,
// }
// const cardList: Array<{
//   key: keyof typeof initializerCount
//   title: string
//   style: Record<string, any>
// }> = [
//   {
//     key: 'create_video_num',
//     title: 'Demo 1',
//     style: {
//       backgroundImage: 'linear-gradient(25deg, #46345d, #505679, #567995, #599db3)',
//     },
//   },
//   {
//     key: 'publish_video_num',
//     title: 'Demo 2',
//     style: {
//       backgroundImage: 'linear-gradient(25deg, #56489a, #8976b6, #baa8d2, #ebdcee)',
//     },
//   },
//   {
//     key: 'upload_material_num',
//     title: 'Demo 3',
//     style: {
//       backgroundImage: 'linear-gradient(25deg, #004547, #66554b, #ac604e, #f26650)',
//     },
//   },
//   {
//     key: 'auth_account_num',
//     title: 'Demo 4',
//     style: {
//       backgroundImage: 'linear-gradient(25deg, #2d2151, #65446a, #9c6a83, #d6939d)',
//     },
//   },
// ]

export default function Index() {
  // const [countInfo] = useState(initializerCount)

  return (
    <>
      {/* <div className="top-card"> */}
        <Dashboard/>
        {/* <Row gutter={[12, 16]}>
          {cardList.map((item) => {
            return (
              <Col key={item.key} xs={24} sm={12} md={12} lg={6} xl={6}>
                <Card title={item.title} variant={'borderless'} hoverable style={item.style}>
                  <div className="p-[15px] text-[36px] text-white font-bold">
                    <NumberCounter value={countInfo[item.key]} />
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row> */}
      {/* </div> */}
    </>
  )
}
