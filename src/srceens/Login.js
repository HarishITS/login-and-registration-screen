import React, { Component } from 'react';
import { Text, View, StyleSheet, I18nManager, Picker, Image, TextInput, Button } from 'react-native';
import { styleLogin } from '../styles/csslogin';
import { Hoshi } from 'react-native-textinput-effects';
import I18n, { getLanguages } from 'react-native-i18n';

// Enable fallbacks if you want `en-US`
// and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// Available languages
I18n.translations = {
    'en': require('../translations/en'),
    'zh': require('../translations/zh'),
    'ar': require('../translations/ar'),
};
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            valueName: '',
            backgroundColor: ''
        }

    }

    onPressLearnMore() {

    }

    chooseLanguages = (user) => {
        var checkEnglish = "English";
        var checkChinese = "Chinese";
        var checkArabic = "Arabic";

        if (checkEnglish.indexOf(user) !== -1) {
            I18n.locale = 'en'
            I18nManager.forceRTL(false)
        }
        if (checkChinese.indexOf(user) !== -1) {
            I18n.locale = 'zh'
            I18nManager.forceRTL(false)
        }
        if (checkArabic.indexOf(user) !== -1) {
            I18n.locale = 'ar'
            I18nManager.forceRTL(true)

        }
        this.setState({ valueName: user })

    }

    render() {
        var css = styleLogin;

        return (
            <View style={css.viewParent}>
          
                    <Picker
                        style={{ borderColor: 'gray', borderBottomWidth: 1 }}
                        selectedValue={this.state.valueName}
                        onValueChange={this.chooseLanguages}>
                        <Picker.Item label="English" value="English" />
                        <Picker.Item label="Arabic" value="Arabic" />
                        <Picker.Item label="Chinese" value="Chinese" />
                    </Picker>
                

                <View style={css.viewParentLogin}>
                    <Text style={css.txtLogo}>kafnu</Text>
                    <View style={css.viewParentInput}>
                        <TextInput
                            style={{ height: 40 }}
                            placeholder={I18n.t('name')}
                        />
                        <TextInput
                            style={{ height: 40, marginTop: 10 }}
                            placeholder={I18n.t('mail')}
                        />

                        <View style={{ marginTop: 20, }}
                        >
                            <Button
                                color="#000"
                                title={I18n.t('login')}
                                onPress={this.onPressLearnMore}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}



