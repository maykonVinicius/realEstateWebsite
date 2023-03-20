import { useForm } from 'react-hook-form'
import { Box, Text, FormControl, Input, Flex, Checkbox, Button } from '@chakra-ui/react'

const HeroForm = () => {
    const { register, handleSubmit, formState:{errors}} = useForm();
    const onsubmit = (data) => { console.log(data) };
    return( 
        <>
            <Box
            width = '100%'
            padding = '2rem'
            borderRadius = 'sm'
            backgroundColor='white'
            color='gray.700'
            >
                <Text
                fontSize='xl'
                fontWeight='bold'
                >
                    Free PDF Guide
                </Text>

                <Text
                fontSize='lg'
                >
                    Complete the form below to download your guide
                </Text>

                <form onSubmit={handleSubmit(onsubmit)}>
                    <FormControl>
                        <Input
                        marginTop='1.3rem' 
                        id='name'
                        type='text'
                        placeholder='Name'
                        {...register('name',{required:true})} 
                        />
                        {errors.name && (
                        <Text
                        fontSize='xs'
                        color='red.400'>
                            {errors.name.type}
                        </Text>)}

                        <Flex 
                        gap={{base:'0', sm:'1rem'}}
                        flexDirection={{base:'column', sm:'row'}}
                        >
                            <Input
                            marginTop='1.3rem' 
                            id='email'
                            type='email'
                            placeholder='Email'
                            {...register('email',{required:true})} 
                            />
                            {errors.email && (
                            <Text
                            fontSize='xs'
                            color='red.400'>
                                {errors.email.type}
                            </Text>)}

                            <Input
                            marginTop='1.3rem' 
                            id='phone'
                            type='text'
                            placeholder='Phone'
                            {...register('phone',{required:true})} 
                            />
                            {errors.phone && (
                            <Text
                            fontSize='xs'
                            color='red.400'>
                                {errors.phone.type}
                            </Text>)}
                        </Flex>

                        <Checkbox
                        marginTop='1.3rem'
                        id='gdpr'
                        type='checkbox'
                        placeholder='GDPR'
                        {...register('gdpr', {required:true})}>
                            consent to having this website store my submitted info
                        </Checkbox>
                        {errors.gdpr&&(
                            <Text
                            fontSize='xs'
                            color='red.400'>
                                {errors.gdpr.type}
                            </Text>
                        )}
                    </FormControl>

                    <Button
                    type='submit'
                    colorScheme='blue'
                    width='100%'
                    fontSize='xl'
                    padding='2rem'
                    marginTop='2rem'
                    >
                        Download Now
                    </Button>
                </form>

            </Box>
        </>
    )
}

export default HeroForm;