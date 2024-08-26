Feature: 360 SMS app menu verification

		@Regression  @Test2
		Scenario Outline: Menu verification
		
		Given That I login app with "<username>" and "<password>"
		When I click "Contacts" link
		When I Open first contact
		
   		#When Add "Sauce Labs Backpack" to Cart
		#When Enter valid details and Place the Order
		#Then Verify order is present in the OrderHistory


		 Examples:
          | username    	  |   password  |
          | 	  |   |







		Scenario Outline: Say bye
		Given a login to Ecommerce2 application with "<username>" and "<password>"
		Then Verify Error message is displayed

		 Examples:
          | username    	  |   password  |
          | sharma@360.com	  |  Noida#2025 |


       
       
