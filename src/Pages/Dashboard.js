import Background from "../Shared/Components/BackGround";
import { CardContainer, CardItem, CardSub, CardMoneyContainer, CardTitle } from "../Shared/Components/Card";
import Theme from "../Shared/Components/Theme";

const featuredData = [
    {title: "Revenue", money: "$3,300", moneyRate: "+12.4"},
    {title: "Sales", money: "$5,300", moneyRate: "+5.6"},
    {title: "Cost", money: "$2,000", moneyRate: "+4.7"},
    {title: "Sales", money: "$5,300", moneyRate: "+5.6"}
]

export default function DashBoard (props){

    const currentTheme = props.themeToUse;
    
    return (
        <Theme theme={currentTheme}>
            <Background>
                <CardContainer>
                    {featuredData && featuredData.map((item, index) => (
                        <CardItem key={index}>
                            <CardTitle>{item.title}</CardTitle>
                            <CardMoneyContainer>
                                <span className="featuredMoney">{item.money}</span>
                                <span className="featuredMoneyRate">{item.moneyRate}</span>
                            </CardMoneyContainer>
                            <CardSub>this is the new rates</CardSub>
                        </CardItem>
                    ))}
                </CardContainer>
            </Background>
        </Theme>
    )
}