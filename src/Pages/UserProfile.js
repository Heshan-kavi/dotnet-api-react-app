import React from "react";
import { styled } from "styled-components";
import { Button, Heading, TextWrapper } from "../globalStyles";
import { IconContext } from 'react-icons/lib';

const pricingData = [
	{
		title: 'Basic',
		price: '$7.99 user/month after offer period',
		numAcc: '50-100 accounts',
		features: ['Secure accounts', 'Best for small business', 'Easy', 'Affordable', '1GB RAM'],
	},
	{
		title: 'Standard',
		price: '$18.99 user/month after offer period',
		numAcc: '50-500 accounts',
		features: [
			'Secure accounts',
			'Best for small business',
			'Customizable',
			'3GB RAM',
			'1TB SSD',
		],
	},
	{
		title: 'Premium',
		price: '$32.50 user/month after offer period',
		numAcc: '50-1000 accounts',
		features: [
			'Secure accounts',
			'Best for small business',
			'Customizable',
			'Easy Integration',
			'Development Team',
			'DNS & Domain included',
		],
	},

	{
		title: 'Enterprise',
		price: '$55.50 user/month after offer period ',
		numAcc: '1000+ Accounts',
		features: ['Unlimited Storage', 'Scalability', 'Free DNS & Domain'],
	},
];

export const PricingSection = styled.div`
	padding: 160px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.color.background};
`;

export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const PricingContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	> div {
		margin: 0.7rem;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCard = styled.div`
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const PricingCardInfo = styled.div`
	background: ${({ theme }) => theme.color.background};
    border: 1px solid ${({ theme }) => theme.colors.primary};
	width: 280px;
	text-decoration: none;
	height: 100%;

	display: flex;
	flex-direction: column;
	padding: 24px;
	color: ${({ theme }) => theme.colors.fontcolor};
	margin: auto;
	> button {
		margin-top: auto;

		&:hover {
            color: ${({ theme }) => theme.colors.background};
			background: ${({ theme }) => theme.colors.primary};
			transition: background 0.3s ease;
		}
	}

	@media screen and (max-width: 768px) {
		width: 90%;

		&:hover {
			transform: none;
		}
	}
`;

export const PricingCardPlan = styled.h3`
    color: ${({ theme }) => theme.color.fontcolor};
	margin-bottom: 5px;
	font-size: 2rem;
`;

export const PricingCardCost = styled.h4`
color: ${({ theme }) => theme.color.fontcolor};
	font-size: 1.2rem;
`;

export const PricingCardText = styled.p`
color: ${({ theme }) => theme.color.fontcolor};
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
`;

export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.color.fontcolor};;
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;

	&:before {
		content: '🎧';
		margin-right: 0.4rem;
	}
`;

function UserProfile(){
    return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<Heading>Pick Your Best Option</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						Create, maintain and store your data with Delta.
					</TextWrapper>
					<PricingContainer>
						{pricingData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
									<Button>Get Started</Button>
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}

export default UserProfile;