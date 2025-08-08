import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import './about_mission.css';

const styles = {
  subTitle: {
    maxWidth: 500
  },
  content: {
    flexDirection: `column`,
    size: `full`,
    alignItems: `center`,
    justifyContent: `center`,
    py: 0
  },
  overlay: {
    size: `full`,
    bg: `omegaDarker`,
    opacity: 0.75,
    position: `absolute`,
    top: 0,
    zIndex: -1
  },
  image: {
    height:`full`,
    position: `absolute`,
    top: 0,
    zIndex: -2
  }
}

const AboutMission = ({
  content: { container, text, buttons, form, images }
}) => (
  <Container className="about-mission" variant='full' sx={{ textAlign: `center`, position: `relative` }}>
    <Flex
      sx={{
        ...styles.content
      }}
    >
        
        <div className="container ">
          <div className="row gy-4">
        
            <div className="col-lg-4 d-flex flex-column justify-content-center text-left">
              <div className="feature-block">
                <div className="css-icon">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACWCAMAAACW0ohYAAAAJFBMVEVNTU1NTU1NTU1NTU1NTU0/ZpMpjf0pjv8pjv8pjv8pjv9NTU2w7K+wAAAACnRSTlPcsIwdXwAbV6Xa2jH7RgAAB0RJREFUeNrtnNu26yoIhlGIGvv+77svOjsbEfAQk8wx1vayh+QL/CCiLWzrBhKR9969h/eeCBHXXR8WUXoHL3mA87SGGFZgvtrDecJnWcnDq3+Ap6dYx0A/gqD7WWdAz+LCnEZnQT9iwJtY0b/OD4c3sKJ7rRnjUoCHSGdo4THScSXAzTrlYyTK+lnpdc2g5azYmaUAfkoXB9D7FVzL6jtSvCdeoyCSUdQchLCQtWFUaBQm2ATuMy2cVWpvQdKYlGkNq1s1WaJVPboFrLr/Z2Z11K3b1gHM+h9ma2e97qFzrH7ZZH6kdXP5AGZQ3bn6Xp+s3TyrU7wvfjjElHIsXoo5pRhGbOtmWaFbVTGmnHPOFWvOOeeUYrduYY4V+iqj8OFUWXPOWbCvXAsZ6QCGUGv3xz0fh8qac95jl2lhnBU64jSkzIbFmnNOoSN4YZTVtZXKTNrDWhtXMi2MsbqmkCTSDtaKVkpfboTVt/wfRNIu1pz30LqZ62f1Df/XOh1i5bqlzhkM+moA6kLoZmUfxL4sLrAK38QO94+xlkJo3FJnBTOqrPuPsOac7Mqzh9WZqCkvYy0+XMO6NitZ3gj2zfcRVpYNaljfYkVbOLJZ95RiDKGa8WOnAnruLLBC4wup5lSqvpGEIcOCzeqbuSOVoMGsjmPq8r8mP2+xYkeaS4c6r2MJIM3FzP+owqLBCj3TR1JqJm1UsxwvCFB1K+is1FfwJCk0uml37ngyEiaprO10/AO7h21sfCe7xAOk9J2FAEZgnV2tSjkh8ILQ2cnAyaw4173rHqkyKgm+83p4gaqV7zthlWlTjYWtcsRJrKg9UMhxu2AgyL5TOQ6sTnuelK+AJZZovjO01/wL2uOU6XQ5rGdRHg5a1gwLilmJlVZxvf+LRJMOKYIUD4Ns1q/h97welqpEE4tJAmTDgiwSqkultAzVVbNiKO+AsmFB1AgIxfUq1t/uxSFd7WyicGLsgCgRFIqqpUFVidU0LBWsIJt1uQK+XRYnleRRNiwcWVFR624Xxyf2CkBcxO2KYfHA6ltmjWv9L4m1vA8I0QXCO7VZ01r/F+mqXBQpOfbLSvKUFZXy+FRS1cVaGlZQJdQS8JVZ41r/F3MrW47tclXgfllBTFhxoQLKTgUaa/goR9eHFeXI+r1MWOr/am5V1rh1DIEqgbDMrOi0FafU7Ajq80FTAqdTK98S2OR0ZYsA3qwNCaSVQSXPrXJ0VSYETUxhjVqrrQvf7DoG8SFp24C/xiWQlvq/bI8ksy2H/BmB1wn8OnGl/9m6NdrdTmAPCWyGcMw/+0r/V+0RWwTciFCbunjkuCqpin11WwTEPALsFWJXCQv9X/fybBEgIwN2TfbEMxJA8p7ELey6yZLNrMU8DqUqgF1kOAsYB4WkJksyBQulfoC/UIZWHCV9jZ3Aiv0ZFjgrD61wLps2u7ky62e3hMkTUAqtMCVXmjg7am4ts0TAWLHcP0nrUJVurri5+9k0YXYEEln3cbmifRJTbyDrxyFs1t+u7nuMyNU+y41q/1gaUUoEBL73dNQps05uPZRxv4zVNKtbcVHG6uZZZ8Q6yurWsNKMWMdY3SpWf/7oeOuq/ySruyCynrCr+18Dl+QB2hblgUX5Fa9IWeZccGLegvUzwWWsdIEEeD1AEmt4jxhWGNb8VpBHB+tHWmmifqUps8r1axqptWfWBX4muaaRdYG53kqn565WZjHXMPZ66ydth8/68uxE20IN5jqWs9pr7nguGTRTQDQbWlV/QOy7TPYyyrZLx++7Un+jENR+1j7dKSbvAMD1/bRvH+tniYlgQZ+wZ4SBPqFXe5oxX3HOpU8Ccv+Vmn3tdCnrPrC5gRvUbfnyMleKIOb+TSMw9mHSDSJIA3J1wv4WF+x+d2Spcq33DR0XQXxKAk7YN1T2Y9PVhg2Nw/zSfmy9mVheKt5qVmWf2/2wki2C/VazKhL4nB/YXva5jHhjEtDOZeCH1TXOu4QbI0uXgHSOqD5Eku4TgXGE5M2qHHsL+VoVBCOypINvIOjYVW7aw02wSY6s47k35Zhm2K9VQQ2rtHHowLq9Goa9KskG5dSbeAAWxPUy1kXbHbDaMU1fsGLTsHfAambFglV595ixr5pqQx1YykH31jn4kC+vuetbKL8fAKV1xg/CX7k84D9hIMVu0PrAWwU3LGfT1jIbaJ/4rQrCfjXqGzY0rQZqfwe/Kojb1eNwD1T7TKA2e79ts+tRty1qgXUE1LcnaHtiGO07MFqS+ABq5+8Nq8/BA6xg2AusLrq7HdUkKG33eliyZO7hgP1ZfFSszFbQ6Pjjk6hMgzx+pv888IK44oaClmLgOVQeLRVK/dce/p7R/nMPaD/eQ0Mgayv8oYEdrJf9IenYEFI7dEweTwzpjIwY5u5xVHF2h7708Xhc6axPw+IIK/5BVPW/6fDvoer/+Yd/KVs1WB9Ls3rNDAMl2sOo5n9/4h/Saot1Q3f3MKvl/wDZGL2MV9U5sAAAAABJRU5ErkJggg==" alt="Our Mission" height="60" />
                </div>
                <h5 className="text-left mb-1">Our Mission</h5>
                <p className="text-left max1100">Our mission is providing email marketing industry with most advance application/ tools, to maximize results, with minimum manual effort.</p>
              </div>
            </div>

            <div className="col-lg-4 d-flex flex-column justify-content-center text-left">
              <div className="feature-block">
                <div className="css-icon">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACWCAMAAAD5TxYwAAAALVBMVEVNTU1NTU1NTU1MT1NNTU1NTU1NTU1NTU05cK4pjv8pjv8pjv8pjv8pjv9NTU2nQQbpAAAADXRSTlPG54cAGTdfqBE3iMXtKkj0HQAABR9JREFUaN7NW9264yoIXaJgmrZ5/8edi+6zGxUUTc58w13T1CWLHxUpok8SsxDljxAJc3L+Eo53WAjhqCWAhO9AYG30X0Hm7RICU2f0/3QhXkYQHD6BpBUECYdfAk0jTI1/HMcRZJtBYBzzAvYj0LEm2YmwpMAPVexBkOOK0BghH9ckb32E1AMIAR8JPUdD6iEkywQB52SXEgtlCyYkG8EACKTGbLJySgmBEUBAL+2wqklB1Alh0wBolKATDSDQ9SLyLDMaBjQE8qYBV4xSiyCO4LGlnZ7UCCk4EkBPjWA5FAwjIMU5aRwxlwhsW8ot0HmC6qg5rkhWeYJmKMR4BwR9ESozh7SIUNniMw4UFTiuCitKoFVB4rpIqwSaxzlekdxMFo2b8SWEMvLwQeDlXDHOHxwjqmfLfhTV9EMxoiLpqgrVhBEjKub4MkKqaELpSTlel1xygvKB3IBQTRlF0gt8A0JhaySUn2O8m6YEvteTGm9iyN1mqAwhoJ6vbrtLtk7moAKhCejH8/0ayvu1d0xNOJsF1WT2t1OeD3PFziXCIsD7/VxCeLz8CO/9sYAwocL7/dyNgPh/EP42S7a3bjOWPnvhFmyEMuIeEyp04qGTNbbndwRVvjQ+zF2TdDPfro/wO4OXHg7SQaiWuIcRUc0Edjt7M4q9Zp2Ynl0ljG/LNS1Vqyj7ZtnVsGIF5XpBEzRZ8FTvBArIYBHxamjarO9QeieqTZq4aXKRFFJEZXq/N7k8KceIenPPTm/6BsNrsw8pEiPqvWx20uRSIaTP+SF3lPgm2OfmUY6b0w7Up+ORLOR2tmjP2uJhw3gs7akZxvlOm+xYNe3MCaVgkMc0GV6clYM/tNKPDPnQSVKHgVb1KNY61aZqxqgqQD/7O702U5hCoUklqa7/cLe+hD5NKkm5W19qamRZXSy3Tlolo8Zm1vmoQ9NDUYGs38MshpJNk7JDIPMqAla0nCC+NNUIv2mV7DokzOLQaR67hbBbxVDR695kVVwf1ZR/Q+Qx+GFTu8/Wm7seD7sBkM3bgba2Lr8HutfrfJQ6f5b+HQc6pRtfJcWuFqu3NM3r4yoBBuVsjGY0KhPIqF6OkdKDolnNa1t7wZBXmrkWUIo7GE6rq8Q2fhdjzcVfwWXvzau/xJvHc8GY3Q5NTenTjdDdj3f22RN37OTzJs9rcEwu+8zAc30C6JSd5t6CY3amqQtz5cleB/Ik2OSxFjyhxB5XkkkE14/l7yLwJIKLYvKUzHHFTcjjcPC4eva4dLyCcEAXV9kfzjvOtZ6ZLgL9cwj0DyLMtgDJP4jAkwg8jZDmOrHs7QLiPaae77abjLnOngr+PemSBoO+ykREIqPeyn6H07A3NAl1TR6yDO7Muwhbt/P0OAI5+mjhb/Boetd8F8GIK84UsrjvmTFxyOy3xi0gqJmp4YZF+DaElhv+OFpeRCgPEa1bnnr58qKl5czNVoVJdh5i+vHwgcg19fXw63kpxiSN3yQ1CvN61qgdB9OpbwKB7QzV6/OAe/iwskg7EVI/gV/M3prj3Ji9Y5Ru+r6cvfvrqOOPCd6IcyXANYQN1p8R+J7srVQujyNAJnvZphDGjjNrh9xb2pKQbFcRvuto7Tg/CcrTFQZHPbh2nFOCckBgmDDK4TfOmGvPm8reSgYZd0niyvB3IiRrfxluYsn+747cg8ArJ5MpBJj/lor3IGj5yZ+g1hBmEtQCS66VbRJBDnt/eZO30vTKNh1xnLGyNsQY4x/gs4TXrSSGCQAAAABJRU5ErkJggg==" alt="Our Vision" height="60" />
                </div>
                <h5 className="text-left mb-1">Our Vision</h5>
                <p className="text-left max1100">Our vision is to keep our core customer-centric approach fixed, while our business strategies evolve and adapt to ever changing tech space.</p>
              </div>
            </div>

            <div className="col-lg-4 d-flex flex-column justify-content-center text-left">
              <div className="feature-block">
                <div className="css-icon">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAACWCAMAAADjXzT7AAAANlBMVEU6SFZNTU1LZIFMTU1NTU1NTU1NTU1IVmRNTU5Idqs3ieQpjv8pjv8pjv8ygdopjv8pjv9NTU0zT0HVAAAAEHRSTlP+6tDHm0VyAB3BzKYkcGjUGSasNQAACIpJREFUeNrVnddi4yAQRYeliFggpP//2XVJbMmh3EEgOezbOnF0zNxpFNMQHUbb4U8Oq038BYr/+LIsUv01WGuUvD64ZoCa5TGE+itTq40S3w9tGKBqeQ0hlbGfPpFi9cCSAbr+vU+eWruayNfAQfUSG0J9GmcEckmJlHISfRsfB8p5ziioXPBP6lTLjT+nhEHjvy8+T6Nx010sCKpbWW5396Vw0yPc9LfxyV59emn8m+fQ8N8cwuhqRUq4RC3wWW4GXeb2YwREKjBQ5Lflgoy5xwjcOUmCAhKFOOlr7k6qEJWlQMu/bKD57GK5t+Fr/CbVSFRAnKIT53pKcZFSRRTWy5mWex1TRW5DFXkVZrlL6AbqmaEwDloOwpgr+teNc227sEgJTauKGeJRrug2XOlxRRm0kUT7uaJKkVIniXZ0Rdv0CBUp8Uu09U8IIe9D3Ye5DX0b1oaeoIFfqhFWoqUkmqxP3Nx1OHapRlj+l5CoTBZQY1/QiV2qEbtEM1CJGvqCjuxSjXZJNNlc8X05K0RK7C4K1FzpbLkVIiVuiQZJ1PXm5IuU9pRo5izL3YgUywKJW6JJJLiE7qDsUo24XZTPsNyNSKF+CjHzP40El/EAUM/spxBTogoILkdMKFukxOx8y9Kq1SGu6K1FhoiUmGsZiETDEaCASHUSlCdRc6blsvspxOuiKCC4jMeAjpxK5A203EWRH2O5G5GWH3wDWv5gLBBcpvmgwRMpsUo0DQSX8ShQnkiJVaKpcnBxR3GuRQqEC2J1UQCJ+sNAAysBIE6CYYHgUnBFIT4uPyPUibQcL4iT/+lycHGMZdzVJyjpe3AWMjwnAyBOEaDKzYURnoR4fUgUGopUxECBEk2Wgws8Bw1IA6eQpkqJ6hpXNOZ2mEj+YoZj6I4qJVpluW6ASP9ViLQ4TcTw0KoYXFyt4daRckRKjJgri8HFVxvu5rNGSTkiJdxB23JwCfWGW0Xq8CyQ8JBrisFl2mO498+SSerxioSqJKr4rmgchvakYzELFO+gmiVRzXdFbmCSfrURqX4D5UmU74r8MPQgxUVKNRKVbFc0DvCwnN0BHi7VCC7RVCm4uP2GyyYti/THy1CNRC3XFfmBMzROCmyA1BvQci/CFoNLaGG4XNKySNUGVHIkqriuyA3VpJdWIiW0RFOl4DI2MlweKSxSQpdpRCG4uGaGyyNFl8gILNFsKbhM7QyXRerAUo3ALoquDi5+qBvm2XK47BOpeIHyJMqrXMZh2E0aQJHm5ovYEhWshm5wQ2dSUKTElqjitOj3cIKkoEgJK9FM3W6xfZwYKShSwrooZYnGSMdh7wBIAZHqb1DDkajMPJZvOp1bUoGINJPJElSiWWC32F2nr899bIG5erh0y6EsUvkNWl4vRiT6jTrehm9ECZF6aOmboBJNnXlatkSKiZSg5WJx6jnvEim0r4aQEs2efM67QOqQUo2QfVcGCS7nkQIitVdQlkTlMJxL+lXbTyGeRM1JoK8FqK9KkRKvRDvvKoYc6QRkgWRZEj3xzokMqQeOEhCQ/8mPAM2QjuWjBIq0kiWJyuV8jWZJQ2lVTSp9r160kSKzIV1+yjUiItVGyix9C/m4oOi5bKiNSu0LU8uHTGmKdD2jm91tyujfexg2U6uiDbmzVbpaarskQc1mIoco6OPNblOrox/k+XMaJ90US3ozkRnQ+/vZ+PrWY7a/X3R+vG3jW7u840g3TdBtURjPUonXTX5Nqg/RgH0gaWB1jgl8+00MIjm1bg7xl0+fpFiHnND3N+sT+Zf2bbBqUnAlgPD3z27s6mO9VusSKbriQYw/azKLs6EH5+0PSpt2GSTwlR0O6KBlehHatefUyVr/RWq7gF6TJKgX1zi3zZDiOSkTNL0MOvYDbULKBQ0Hgj5zbJEjlV1A/XwgqM325JikPFA3Hwm6TshypLo9aLM9U01ITenEbj3oPDfektGG1LQG9dm9as55v2N16VoeKsskVbjn5YC6jOWGZzVTuV74qEp0hjTme/H1Aw7oBB69qZKrTDmW7Jwq2HapjeXu9sA27UJzpAZe46M2Pnf3nNoFIf1lvRoOpX1A5x35Hov0dFBf6Yy4pKYLqK868diVVHUBdfiU1tThNaRLF6/LOb9dDKa2BanCs11eChhagSohpK4lfb5olj4JA+cyCaTSZJKuj4zdXrWKs1WmWT3Kcbs6CZMjtdtFMsnbQcLtMKw2wc1ZQ87tBDRLFWnqXl9oNYjYznEaH1fj+1JcnYDii0WqwPtIG4Ei7Ybn5RKJUkZWkaodnHtAMb1GTTjrdJIvqh2ce0DHHX7J1sypqNXnQaCtSH/vnxEK37F3BOjcxHp//k9YraS8hhfe150dAhpN8S1WmP0Y55O9ciPtIaDxhBBNg4TR10ncu7+0u9fN5ElwGrRAlzSfF0eLZVuOVEB3rB4CyrtGbXLXMaRxNJbv6TNA+feoBQ+Tyracu0B/qTR4dqKUtN6Y6Yod29Z2gb6RemiOJ4hUN/RDDUBXbaS7VfqaWBMl/ckOnttOOVlQB9Abq7+tLTk84oS07zXvYVTdNmIaZczuvZb7Qfmh1aVj5mPaXk2SdqdP2oJOdRnhuv6SZvWVog1Pn7QFdXXZQ/KrcuyngoI5BJrvtdwa3BjUtQRteuCvMSjmjhQE2vZgY2tQxHgvpBLtz45b2puDAnP6RW+zFclrVetjje1BrxnEvbMdxtSeh39vdvkzoer7jIaQHb44vAPoHfaeKqUsd6tAvQ4m9vYNXT2eqBPoY8Rn9B89koFHVmfNMWdTjwcNtEqC1l+srv8uqE+4ogOiybGgLtonU22bQZ8AGplSP8TXUIT906C/VOoTCYLsfhtAZ9BtovRsGFnVNQs6A3RlvWHdLdIvdyvUEZc7UP8/MY1jiN0To839qzwPOpD6H4BGpQIh9kv+AAAAAElFTkSuQmCC" alt="Our Team" height="60" />
                </div>
                <h5 className="text-left mb-1">Our Team</h5>
                <p className="text-left max1100">Our team is inspired to be best when it comes to assisting, suggest solutions and to keep a level head when fixing issue.</p>
              </div>
            </div>

          </div>
        </div>
          
    </Flex>
  </Container>
)

export default WithDefaultContent(AboutMission)
